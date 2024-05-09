import { render, screen } from "@testing-library/react";
import { GiftExpertApp } from "../src/GiftExpertApp";

describe('Test in <GifExpertApp />', () => {
    const initialCategory = 'Attack On Titan';
    test('should load initial screen', () => {
        render(<GiftExpertApp />);

        expect(screen.getByRole('heading', { level: 3 }).textContent).toContain(initialCategory);
        expect(screen.getByRole('heading', { level: 2 }).textContent).toContain('Cargando...');
        screen.debug();
    });
});