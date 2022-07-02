export declare const signInSchema: {
    response: {
        200: {
            type: string;
            properties: {
                token: {
                    type: string;
                };
            };
        };
    };
    body: {
        type: string;
        properties: {
            login: {
                type: string;
            };
            password: {
                type: string;
            };
        };
        required: string[];
    };
};
export declare const signUpSchema: {
    response: {
        200: {
            type: string;
            properties: {
                token: {
                    type: string;
                };
            };
        };
    };
    body: {
        type: string;
        properties: {
            firstName: {
                type: string;
            };
            lastName: {
                type: string;
            };
            role: {
                type: string;
            };
            login: {
                type: string;
            };
            password: {
                type: string;
            };
            age: {
                type: string;
            };
        };
        required: string[];
    };
};
