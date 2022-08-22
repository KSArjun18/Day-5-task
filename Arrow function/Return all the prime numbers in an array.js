let Array = [1, 2, 3, 4, 5, 6, 98, 101, 467]

console.log("Prime Number is Array are: " +
    Array.filter((item) => {

        for (let i = 2; i < item; i++) {
            if (item % i === 0)
                return false;
        }
        return item !== 1;

    }))