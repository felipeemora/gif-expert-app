import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/componets/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Test in <GifGrid />', () => {
    const category = 'Attack On Titan';

    test('should to show loading initial', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('should to show items when images are loaded', () => {
        const gifs = [
            {
                id: 'EI321',
                title: 'Eren Yeager',
                url: 'http://localhost:8080/eren'
            },
            {
                id: 'EI2321',
                title: 'Mikasa Ackerman',
                url: 'http://localhost:8080/mikasa'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(2);
    });
});