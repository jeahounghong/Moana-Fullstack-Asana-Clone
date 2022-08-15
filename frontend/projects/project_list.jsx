import React from "react";

class ProjectList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            addSection: false,
            title: ""
        }
        this.description = this.description.bind(this);
        this.handleCreate = this.handleCreate.bind(this)
    }

    description(){
        return(
            <div className="project-list-description">
                <h3>Description:</h3>
                <div>{this.props.project ? this.props.project.description : ""}</div>
            </div>
        )
    }

    handleCreate(){
        const title = this.state.title;
        this.props.createSection({
            title: title,
            project_id: parseInt(this.props.project.id)
        })
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
                // console.log("hi")
                // for( let i = 0; i < contents.length; i++){
                //     let sectionId = parseInt(contents[i].id.substring(8))
                //     this.props.updateSection({
                //         id: sectionId,
                //         project_id: this.props.project.id,
                //         title: contents[i].innerHTML
                //     })
                // }
            }
        })
    }

    render(){return(
        <div className="project-list">
            {this.description()}
            <div className="project-sections">
                <h3>Sections</h3>
                <ul>
                    { this.props.project ? this.props.project.projectSections.map((sectionId) => (
                        <li className="project-section-li-items">
                            <span contentEditable={true} onChange={this.updateSection} className="sections" id={`section-${sectionId}`}>
                                {this.props.sections[sectionId] ? this.props.sections[sectionId].title : ""}
                            </span>
                        </li>
                    )) : ""}
                </ul>
                <div onClick={() => this.setState({addSection: true})}>Add Section +</div>
                {this.state.addSection ? this.addSectionForm() : ""}
            </div>
        </div>
    )}
}

export default ProjectList;