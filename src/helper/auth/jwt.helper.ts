import jwt from 'jsonwebtoken';
export const generateToken = (userData: object, secretSignature: string, tokenLife: string) => {
    return new Promise((resolve, reject) => {
    // Thực hiện ký và tạo token
    jwt.sign(
        {data: userData},
        secretSignature,
        {
            algorithm: "HS256",
            expiresIn: tokenLife,
        },
        (error, token) => {
            if (error) {
                return reject(error);
            }
            resolve(token);
        });
    });
}

export const verifyToken = (token: string, secretKey: string) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secretKey, (error, decoded) => {
            if (error) {
                return reject(error);
            }
            resolve(decoded);
        });
    });
}
