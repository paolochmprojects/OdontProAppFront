
export interface ApiServiceInterface {
    get: <T>(url: string, q?: URLSearchParams) => Promise<T | Error>
    post: <T>(url: string, data: string) => Promise<T | Error>,
    patch: <T>(url: string, data: string, id: string) => Promise<T | Error>
    delete: <T>(url: string, id: string) => Promise<T | Error>
}

interface ApiErrorResponse {
    message: string | string[]
    error: string
    statusCode?: number
}

class ApiService implements ApiServiceInterface {
    async get<T>(url: string, q?: URLSearchParams): Promise<T | Error> {
        try {
            const queryString = "";
            if (q) {
                queryString.toString()
            }
            const response = await fetch(`${url}${queryString}`);
            if (!response.ok) {
                const errResponse = await response.json() as ApiErrorResponse
                throw new Error(`${errResponse.statusCode}: ${errResponse.message}`);
            }
            return await response.json() as T;
        } catch (error) {
            if (error instanceof Error) return new Error(`Error fetching data: ${error.message}`);
            return new Error("Upps pasó algo con la aplicacion.")
        }
    }

    async post<T>(url: string, data: string): Promise<T | Error> {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: data
            });
            if (!response.ok) {
                const errResponse = await response.json() as ApiErrorResponse
                throw new Error(`${errResponse.statusCode}: ${errResponse.message}`);
            }
            return await response.json() as T;
        } catch (error) {
            if (error instanceof Error) return new Error(`${error.message}`);
            return new Error("Upps pasó algo con la aplicacion.");
        }
    }

    async patch<T>(url: string, data: string, id: string): Promise<T | Error> {
        try {
            const response = await fetch(`${url}/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: data
            });
            if (!response.ok) {
                const errResponse = await response.json() as ApiErrorResponse
                throw new Error(`${errResponse.statusCode}: ${errResponse.message}`);
            }
            return await response.json() as T;
        } catch (error) {
            if (error instanceof Error) return new Error(`Error patching data: ${error.message}`);
            return new Error("Upps pasó algo con la aplicacion.")
        }
    }

    async delete<T>(url: string, id: string): Promise<T | Error> {
        try {
            const response = await fetch(`${url}/${id}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                const errResponse = await response.json() as ApiErrorResponse
                throw new Error(`${errResponse.statusCode}: ${errResponse.message}`);
            }
            return await response.json() as T;
        } catch (error) {
            if (error instanceof Error) return new Error(`Error deleting data: ${error.message}`);
            return new Error("Upps pasó algo con la aplicacion.")
        }
    }
}

export default new ApiService()
