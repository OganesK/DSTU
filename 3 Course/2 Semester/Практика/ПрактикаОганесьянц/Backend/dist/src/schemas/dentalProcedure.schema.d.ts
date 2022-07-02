export declare const createDentalProcedureSchema: {
    response: {
        200: {
            type: string;
            properties: {
                id: {
                    type: string;
                };
                name: {
                    type: string;
                };
                price: {
                    type: string;
                };
            };
        };
    };
    body: {
        type: string;
        properties: {
            name: {
                type: string;
            };
            price: {
                type: string;
            };
        };
        required: string[];
    };
    headers: {
        token: {
            type: string;
        };
    };
};
export declare const getAllDentalProceduresSchema: {
    response: {
        200: {
            type: string;
            items: {
                type: string;
                properties: {
                    id: {
                        type: string;
                    };
                    name: {
                        type: string;
                    };
                    price: {
                        type: string;
                    };
                };
            };
        };
    };
    headers: {
        token: {
            type: string;
        };
    };
};
