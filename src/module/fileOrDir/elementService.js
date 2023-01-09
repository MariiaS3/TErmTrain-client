import axios from "axios";
import url from "../../config";

// export default getTerntrainService = () => axios.get(`${url}/api/v1`)

export const getElementByNameService = (name) => axios.get(`${url}/api/v1/name/${name}`);

export const getElementByPathService = (path) => axios.get(`${url}/api/v1/path/${path}`);

export const getElementnByNameAndPathService = (pathName) => axios.get(`${url}/api/v1/path-and-name/${pathName}`);

// export const getTerntrainAddNEwFileOrDirService = (dirFile) => axios.post(`${url}/api/v1/add-new`,dirFile);



