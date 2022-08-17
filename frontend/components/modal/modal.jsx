import { connect } from "react-redux"
import React from "react"
import NewTeamFormContainer from "./new_team_form_container";
import NewProjectFormContainer from "./new_project_form_container";
import { SHOW_NEW_TEAM_FORM, SHOW_NEW_PROJECT_FORM,closeModal } from "../../actions/ui_actions"


class Modal extends React.Component{

    constructor(props){
        super(props);
        
    }


    modalContent(){

    }

    render(){
        if (this.props.show) {
            switch(this.props.modalContent){
                case SHOW_NEW_TEAM_FORM:
                    return <NewTeamFormContainer closeModal={this.props.closeModal}/>
                case SHOW_NEW_PROJECT_FORM:
                    return <NewProjectFormContainer closeModal={this.props.closeModal}/>
                default:
                    return null;
            }
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