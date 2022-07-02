export declare const createOneDentalDiseaseSchema: {
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
            };
        };
    };
    body: {
        type: string;
        properties: {
            name: {
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
