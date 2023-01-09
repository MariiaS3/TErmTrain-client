import { render } from "@testing-library/react";



describe("Layout", () => {
    it('should render layout component',() =>{
        const {getByText} = render(
            <Layout>
                <div>test layout component</div>
            </Layout>
        );
        expect(getByText('test layout component')).toBeInTheDocument();
    });
})