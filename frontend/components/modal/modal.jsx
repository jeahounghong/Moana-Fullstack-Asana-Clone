import { connect } from "react-redux"
import React from "react"
import NewTeamFormContainer from "./new_team_form_container";
import NewProjectFormContainer from "./new_project_form_container";
import UpdateTeamFormContainer from "./update_team_form_container";
import UpdateProjectFormContainer from "./update_project_form_container";
import AddTeamUserFormContainer from "./add_team_user_form_container";
import AddProjectUserFormContainer from "./add_project_user_form_container";
import { SHOW_NEW_TEAM_FORM, SHOW_NEW_PROJECT_FORM, SHOW_UPDATE_TEAM_FORM, SHOW_UPDATE_PROJECT_FORM , 
    SHOW_ADD_TEAM_USER_FORM,SHOW_ADD_PROJECT_USER_FORM,closeModal } from "../../actions/ui_actions"


class Modal extends React.Component{

    constructor(props){
        super(props);
        this.modalContent = this.modalContent.bind(this);
        this.backgroundCloseModal = this.backgroundCloseModal.bind(this)
    }


    modalContent(modalContent){
        switch(modalContent){
            case SHOW_NEW_TEAM_FORM:
                return <NewTeamFormContainer/>

            case SHOW_UPDATE_TEAM_FORM:
                return <UpdateTeamFormContainer/>

            case SHOW_NEW_PROJECT_FORM:
                return <NewProjectFormContainer closeModal={this.props.closeModal}/>

            case SHOW_UPDATE_PROJECT_FORM:
                return <UpdateProjectFormContainer />
            case SHOW_ADD_TEAM_USER_FORM:
                return <AddTeamUserFormContainer />
            case SHOW_ADD_PROJECT_USER_FORM:
                return <AddProjectUserFormContainer/>
            default:
                return null;
        }
    }

    backgroundCloseModal(e){
        // e.preventDefault();
        if (e.target === e.currentTarget){
            this.props.closeModal();
        }
    }

    render(){
        if (this.props.show) {
            return (
                <div className="modal-container" onClick={this.backgroundCloseModal}>
                    <div className="modal-close-button"  onClick={this.props.closeModal}>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                    {this.modalContent(this.props.modalContent)}
                </div>
            )
        } else {
            return null
        }
    }
}


const mapStateToProps = (state) => ({
    show: state.ui.modal,
    modalContent: state.ui.modalContent,
    modalTeam: state.ui.modalTeam,
})

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())
})

const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(Modal);
export default ModalContainer;