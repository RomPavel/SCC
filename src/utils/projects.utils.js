import { projects } from '../mocks/projects'

export function getAllProjects() {
    return projects;
}

export function findProjectById(projects, id) {
    return projects.find((el) => +el.id === +id)
}

