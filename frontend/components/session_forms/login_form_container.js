import { connect } from "react-redux";
import { loginUser } from "../../actions/session_actions";
import SessionForm from "./session_form";


const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    formType: "Log In"
})

const mapDispatchToProps = dispatch => ({
    processSessionForm: (user) => dispatch(loginUser(user))
})

const LoginFormContainer = connect(mapStateToProps,mapDispatchToProps)(SessionForm);
export default LoginFormContainer;