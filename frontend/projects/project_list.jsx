import React from "react";
import TaskListContainer from '../components/tasks/task_list_container'

class ProjectList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            addSection: false,
            title: ""
        }
        this.description = this.description.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.addSectionForm = this.addSectionForm.bind(this);
    }

    description(){
        return(
            <div className="project-list-description">
                <h3>Description:</h3>
                <div>{this.props.project ? this.props.project.description : ""}</div>
            </div>
        )
    }

    handleCreate(e){
        e.preventDefault();
        const title = this.state.title;
        this.props.createSection({
            title: title,
            project_id: parseInt(this.props.project.id)
        })
        this.setState({addSection: false})
        setTimeout(() => {this.setState({title: ""})}, 500)
    }

    handleInput(type){
        return (e) => {
            this.setState({[type]: e.currentTarget.value})
        }
    }

    addSectionForm(){return(
        <form onSubmit={this.handleCreate}>
            <label>Section Title:
                <input type="text" 
                    value={this.state.title}
                    onChange={this.handleInput("title")}
                />
            </label>
        </form>
    )}

    updateSection(e){
        console.log("hi")
    }

    componentDidMount(){
        // Used a setTimeout in place of a hook to allow for components to render
        setTimeout(() => {
            const contents = $('.sections')
            console.log(contents)
            $('.sections').blur((() => {
                for( let i = 0; i < contents.length; i++){
                    let sectionId = parseInt(contents[i].id.substring(8))
                    if (contents[i].innerHTML === ""){
                        // console.log("empty")
                        this.props.deleteSection(sectionId)
                    } else {
                        this.props.updateSection({
                            id: sectionId,
                            project_id: this.props.project.id,
                            title: contents[i].innerHTML
                        })
                    }
                    
                }
            }))

            contents.keydown((e) => {
                if (e.keyCode === 13){
                    e.preventDefault();
                }
            })
        }, 500)
    }

    render(){
        return(
        <div className="project-list">
            {this.description()}
            <div className="project-sections">
                <h3>Sections</h3>
                <ul>
                    { Object.values(this.props.sections).map((section) => (
                        (section.projectId === this.props.project.id) ? 
                        <li className="project-section-li-items" key={section.id}>
                            <span contentEditable={true} 
                                    onChange={this.updateSection} 
                                    className="sections" 
                                    id={`section-${section.id}`}
                                    suppressContentEditableWarning={true}>
                                {this.props.sections[section.id] ? this.props.sections[section.id].title : ""}
                            </span>
                            {/* <TaskListContainer/> */}
                        </li> : ""
                    ))}

                </ul>
                <div onClick={() => this.setState({addSection: !this.state.addSection})}>Add Section +</div>
                {this.state.addSection ? this.addSectionForm() : ""}
            </div>
        </div>
    )}
}

export default ProjectList;