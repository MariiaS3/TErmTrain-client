import configureStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';
import axios from 'axios';
import { getElementByName, getElementByPath, getElementByNameAndPath } from "../elementAction";

jest.mock('axios');
const middleware = [reduxThunk];
const mockStore = configureStore(middleware);

describe('ElementAction', () => {

    beforeEach(() => {
        axios.get.mockImplementation(() => Promise.resolve({
            data: [
                {
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
                }
            ]
        }))
    });

    it('should able to dispatch success action get by name', async () => {

        const store = mockStore({});
        await store.dispatch(getElementByName('testfile.txt'));
        const action = store.getActions();

        expect(action.length).toEqual(3);
        expect(action[1]).toEqual({
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
        })
    });

    it('should able to dispatch success action get by path', async () => {

        const store = mockStore({});
        await store.dispatch(getElementByPath('/testfolder'));
        const action = store.getActions();
        expect(action.length).toEqual(3);
        expect(action[1]).toEqual({
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
        })
    });
    it('should able to dispatch success action get by path and name', async () => {

        const store = mockStore({});
        await store.dispatch(getElementByNameAndPath('/testfolder/testfile.txt'));
        const action = store.getActions();
        expect(action.length).toEqual(3);
        expect(action[1]).toEqual({
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
        })
    });

    it('should able to dispatch error action', async () => {
        const store = mockStore({});
        axios.get.mockImplementation(() => {
            throw new Error;
        });

        await store.dispatch(getElementByNameAndPath('/testfolder/testfile.txt'));
        const action = store.getActions();

        expect(action.length).toEqual(2);
        expect(action[1]).toEqual({
            type: 'ELEMENTLISTERROR'
        })
    });
})
