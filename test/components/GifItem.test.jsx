import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/componets/GifItem";

describe('Test to <GifItem />', () => {

    const title = 'Attack On Titan';
    const url = 'http://localhost:9090/image.jpg';

    test('should do match with the snapshot', () => { 
        render(<GifItem title={title} url={url}/>);
        expect(screen).toMatchSnapshot();
    });

    test('should show the img and the ALT ok', () => { 
        render(<GifItem title={title} url={url} />);

        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('should to show the title of componet', () => { 
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    })
});