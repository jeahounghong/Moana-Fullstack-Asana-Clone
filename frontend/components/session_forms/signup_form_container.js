import { connect } from "react-redux";
import { clearErrors, signupUser } from "../../actions/session_actions";
import SessionForm from "./session_form";


const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    formType: "Sign Up"
})

const mapDispatchToProps = dispatch => ({
    processSessionForm: (user) => dispatch(signupUser(user)),
    clearErrors: () => dispatch(clearErrors())
})

const SignupFormContainer = connect(mapStateToProps,mapDispatchToProps)(SessionForm);
export default SignupFormContainer;