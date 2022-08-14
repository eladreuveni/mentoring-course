
export const getAllUsers = async () => {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    name: 'John Doe',
                    email: 'jd.gmail.com'
                }
            ])
        }, 3000)
    });
}
