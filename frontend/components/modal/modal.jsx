import { connect } from "react-redux"
import React from "react"
import NewTeamFormContainer from "./new_team_form_container";
import NewProjectFormContainer from "./new_project_form_container";
import { SHOW_NEW_TEAM_FORM, SHOW_NEW_PROJECT_FORM,closeModal } from "../../actions/ui_actions"


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
            case SHOW_NEW_PROJECT_FORM:
                return <NewProjectFormContainer closeModal={this.props.closeModal}/>
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
    modalContent: state.ui.modalContent
})

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())
})

const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(Modal);
export default ModalContainer;