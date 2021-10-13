
import {projects} from "~/store/data";

export const state = () => ({
  projects
})

export const getters = {
  getProjectId:(state) => (slug) => {
     return state.projects.find(project => project.slug === slug)
  }
}

export const actions = {

}

export const mutations= {

}


