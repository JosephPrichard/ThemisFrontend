export function range(start, end) {
    end = end - start + 1;
    return Array.apply(0, Array(end))
        .map((element, index) => index + start);
}