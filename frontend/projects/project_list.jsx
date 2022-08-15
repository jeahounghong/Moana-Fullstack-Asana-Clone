import React from "react";

class ProjectList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            addSection: false,
            title: ""
        }
        this.description = this.description.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.addSectionForm = this.addSectionForm.bind(this)
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
        const contents = $('.sections')
        $('.sections').blur((() => {
            console.log($('.sections'))
            for( let i = 0; i < contents.length; i++){
                let sectionId = parseInt(contents[i].id.substring(8))
                this.props.updateSection({
                    id: sectionId,
                    project_id: this.props.project.id,
                    title: contents[i].innerHTML
                })
                
            }
        }))

        contents.keydown((e) => {
            if (e.keyCode === 13){
                e.preventDefault();
            }
        })
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
                        </li> : ""
                    
                        // <li>
                        //     {section.projectId},{this.props.project.id}
                        // </li>
                    ))}


                    {/* { this.props.project ? this.props.project.projectSections.map((sectionId) => (
                        <li className="project-section-li-items" key={sectionId}>
                            <span contentEditable={true} 
                                    onChange={this.updateSection} 
                                    className="sections" 
                                    id={`section-${sectionId}`}
                                    suppressContentEditableWarning={true}>
                                {this.props.sections[sectionId] ? this.props.sections[sectionId].title : ""}
                            </span>
                        </li>
                    )) : ""} */}
                </ul>
                <div onClick={() => this.setState({addSection: true})}>Add Section +</div>
                {this.state.addSection ? this.addSectionForm() : ""}
            </div>
        </div>
    )}
}

export default ProjectList;