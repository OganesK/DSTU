export declare const createMedicalRecordSchema: {
    response: {
        200: {
            type: string;
            properties: {
                id: {
                    type: string;
                };
                patient: {
                    type: string;
                    properties: {
                        id: {
                            type: string;
                        };
                        firstName: {
                            type: string;
                        };
                        lastName: {
                            type: string;
                        };
                        role: {
                            type: string;
                        };
                    };
                };
                dentist: {
                    type: string;
                    properties: {
                        id: {
                            type: string;
                        };
                        firstName: {
                            type: string;
                        };
                        lastName: {
                            type: string;
                        };
                        role: {
                            type: string;
                        };
                    };
                };
                diseases: {
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
                        };
                    };
                };
                procedure: {
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
        };
    };
    body: {
        type: string;
        properties: {
            dentistId: {
                type: string;
            };
            userId: {
                type: string;
            };
            medicalProcedureNames: {
                type: string;
                items: {
                    type: string;
                };
            };
            medicalDiseaseNames: {
                type: string;
                items: {
                    type: string;
                };
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
export declare const getAllMedicalRecordsSchema: {
    response: {
        200: {
            type: string;
            items: {
                type: string;
                properties: {
                    id: {
                        type: string;
                    };
                    patient: {
                        type: string;
                        properties: {
                            id: {
                                type: string;
                            };
                            firstName: {
                                type: string;
                            };
                            lastName: {
                                type: string;
                            };
                            role: {
                                type: string;
                            };
                        };
                    };
                    dentist: {
                        type: string;
                        properties: {
                            id: {
                                type: string;
                            };
                            firstName: {
                                type: string;
                            };
                            lastName: {
                                type: string;
                            };
                            role: {
                                type: string;
                            };
                        };
                    };
                    diseases: {
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
                            };
                        };
                    };
                    procedure: {
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
            };
        };
    };
    headers: {
        token: {
            type: string;
        };
    };
};
