import * as SectionApiUtil from "../util/section_api_util";

export const RECEIVE_SECTION = "RECEIVE_SECTION";
export const RECEIVE_SECTIONS = "RECEIVE_SECTIONS";
export const REMOVE_SECTION = "REMOVE_SECTION";

const receiveSection = (section) => ({
    type: RECEIVE_SECTION,
    section
})

const receiveSections = (sections) => ({
    type: RECEIVE_SECTIONS,
    sections
})

const removeSection = (sectionId) => ({
    type: REMOVE_SECTION,
    sectionId
})

export const fetchProjectSections = (projectId) => dispatch => SectionApiUtil.fetchProjectSections(projectId)
    .then(sections => dispatch(receiveSections(sections)))

export const updateSection = (section) => dispatch => SectionApiUtil.updateSection(section)
    .then(section => dispatch(receiveSection(section)))

export const createSection = (section) => dispatch => SectionApiUtil.createSection(section)
    .then(section => dispatch(receiveSection(section)))

export const deleteSection = (sectionId) => dispatch => SectionApiUtil.deleteSection(sectionId)
    .then(() => dispatch(removeSection(sectionId)))

// export const update