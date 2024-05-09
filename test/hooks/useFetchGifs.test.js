import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Test in useFetchGifs hook', () => {
    const category = 'Attack on titan';

    test('should return the initial state', () => {
        const { result } = renderHook(() => useFetchGifs(category));
        const { images, isLoading } = result.current;
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('should return an images array and isLoading false', async () => {
        const { result } = renderHook(() => useFetchGifs(category));
        await waitFor(
            () => expect( result.current.images.length).toBeGreaterThan(0),
            { timeout: 1000}
        );
        const { images, isLoading } = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
});