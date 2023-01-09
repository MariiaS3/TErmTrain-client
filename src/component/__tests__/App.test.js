import renderWithRedux from "../../util/testUnit";



describe("App component",() =>{

    it('shouldrender app with error', () => {
        const {asFragment} = renderWithRedux(<App />, {});
        expect(asFragment()).toMatchSnapshot();
    });


})