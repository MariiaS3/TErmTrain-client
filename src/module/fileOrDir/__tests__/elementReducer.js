import elementReducer, {INITIAL_ELEMENT_REDUCER_STATE} from "../elementReducer" 


describe('ElementReducer', () =>{

    it('should return right new state for ELEMENTLISTNAME Action', () =>{
        const action = {
            type: 'ELEMENTLISTNAME',
            payload: [{
                id: 2,
                name: "testfile.txt",
                path: "/testfolder",
                permisions: "-rw-r--r--",
                link: 1,
                username: "root",
                groupname: "group",
                size: 4096,
                time: "Aug 8 11:51",
                isDirectory: false,
                text: "some string"
            }]
        };

        const newState = elementReducer(INITIAL_ELEMENT_REDUCER_STATE, action);

        expect(newState).toEqual({
            element: [{
                id: 2,
                name: "testfile.txt",
                path: "/testfolder",
                permisions: "-rw-r--r--",
                link: 1,
                username: "root",
                groupname: "group",
                size: 4096,
                time: "Aug 8 11:51",
                isDirectory: false,
                text: "some string"
            }],
            promise:{
                isPending: false,
                isFullfilled: false,
                isErrorOcurred: false
            }
        })
    });

    it('should return right new state for ELEMENTLISTPATH Action', () =>{
        const action = {
            type: 'ELEMENTLISTPATH',
            payload: [{
                id: 2,
                name: "testfile.txt",
                path: "/testfolder",
                permisions: "-rw-r--r--",
                link: 1,
                username: "root",
                groupname: "group",
                size: 4096,
                time: "Aug 8 11:51",
                isDirectory: false,
                text: "some string"
            }]
        };

        const newState = elementReducer(INITIAL_ELEMENT_REDUCER_STATE, action);

        expect(newState).toEqual({
            element: [{
                id: 2,
                name: "testfile.txt",
                path: "/testfolder",
                permisions: "-rw-r--r--",
                link: 1,
                username: "root",
                groupname: "group",
                size: 4096,
                time: "Aug 8 11:51",
                isDirectory: false,
                text: "some string"
            }],
            promise:{
                isPending: false,
                isFullfilled: false,
                isErrorOcurred: false
            }
        })
    });

    it('should return right new state for ELEMENTLISTPATHNAME Action', () =>{
        const action = {
            type: 'ELEMENTLISTPATHNAME',
            payload: [{
                id: 2,
                name: "testfile.txt",
                path: "/testfolder",
                permisions: "-rw-r--r--",
                link: 1,
                username: "root",
                groupname: "group",
                size: 4096,
                time: "Aug 8 11:51",
                isDirectory: false,
                text: "some string"
            }]
        };

        const newState = elementReducer(INITIAL_ELEMENT_REDUCER_STATE, action);

        expect(newState).toEqual({
            element: [{
                id: 2,
                name: "testfile.txt",
                path: "/testfolder",
                permisions: "-rw-r--r--",
                link: 1,
                username: "root",
                groupname: "group",
                size: 4096,
                time: "Aug 8 11:51",
                isDirectory: false,
                text: "some string"
            }],
            promise:{
                isPending: false,
                isFullfilled: false,
                isErrorOcurred: false
            }
        })
    });
})



