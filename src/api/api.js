import axios from "axios"

export const getProjects = async() => {
    const response = await axios.get('https://wpjwpqs74c.execute-api.ap-south-1.amazonaws.com/prod/projects')
    return response.data
}

export const baseImageUrl = 'https://s3-mern-demo.s3.ap-south-1.amazonaws.com'