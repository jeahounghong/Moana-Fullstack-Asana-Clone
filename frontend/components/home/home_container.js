import { connect } from "react-redux";
import { logoutUser } from "../../actions/session_actions";
import Home from "./home";

const mapStateToProps = state => ({
    currentUser: (Boolean(state.session.id) ? state.entities.users[state.session.id] : null),
    projects: state.entities.projects,
    users: state.entities.users
})

const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser())
})

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)
export default HomeContainer;