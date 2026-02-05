import axios from "axios";

const projectsService = {
  getProjects: async () => {
    const response = await axios.get("/api/projects");
    return response.data;
  },
};

export default projectsService;
