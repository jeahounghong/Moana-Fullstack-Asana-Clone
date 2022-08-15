import * as SectionApiUtil from "../util/section_api_util";

export const RECEIVE_SECTION = "RECEIVE_SECTION";
export const RECEIVE_SECTIONS = "RECEIVE_SECTIONS";

const receiveSection = (section) => ({
    type: RECEIVE_SECTION,
    section
})

const receiveSections = (sections) => ({
    type: RECEIVE_SECTIONS,
    sections
})

export const fetchProjectSections = (projectId) => dispatch => SectionApiUtil.fetchProjectSections(projectId)
    .then(projects => dispatch(receiveSections(projects)))