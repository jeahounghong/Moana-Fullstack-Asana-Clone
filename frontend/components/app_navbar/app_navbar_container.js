import { connect } from "react-redux";
import AppNavbar from "./app_navbar";
import { logoutUser } from "../../actions/session_actions";
import { openSidebar, closeSidebar} from "../../actions/ui_actions"



const mapStateToProps = (state, ownProps) => ({
    currentUser: (Boolean(state.session.id) ? state.entities.users[state.session.id] : null),
    url: ownProps.location.pathname,
    showSidebar: state.ui.sidebar,
    teams: state.entities.teams
})

const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser()),
    openSidebar: () => dispatch(openSidebar()),
    closeSidebar: () => dispatch(closeSidebar())

})

const AppNavbarContainer = connect(mapStateToProps,mapDispatchToProps)(AppNavbar);
export default AppNavbarContainer;