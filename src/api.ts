import axios, { AxiosInstance } from "axios";

const API_URL = "https://to-do-list-server-2a139e47cc48.herokuapp.com";

const axiosInstance: AxiosInstance = axios.create({
    baseURL: API_URL,
});

export async function getTasks() {
    try {
        const { data } = await axiosInstance.get("tasksBD");
        const tasksBD = data || [];
        return { tasksBD };
    } catch (error) {
        console.error('Erro ao buscar tarefas:', error);
        throw error;
    }
}

export async function getTask(id: string) {
    try {
        const { data } = await axiosInstance.get(`tasksBD/${id}`);
        return data;
    } catch (error) {
        console.error(`Erro ao buscar a tarefa com ID ${id}:`, error);
        throw error;
    }
}

export async function createTask(task: any) {
    try {
        const { data } = await axiosInstance.post("tasksBD", task);
        return data;
    } catch (error) {
        console.error('Erro ao criar a tarefa:', error);
        throw error;
    }
}

export async function updateTask(id: string, updatedTask: any) {
    try {
        const { data } = await axiosInstance.put(`tasksBD/${id}`, updatedTask);
        return data;
    } catch (error) {
        console.error(`Erro ao atualizar a tarefa com ID ${id}:`, error);
        throw error;
    }
}

export async function deleteTask(id: string) {
    try {
        await axiosInstance.delete(`tasksBD/${id}`);
        console.log(`Tarefa com ID ${id} excluída com sucesso.`);
        return { success: true, message: `Tarefa com ID ${id} excluída com sucesso.` };
    } catch (error) {
        console.error(`Erro ao excluir a tarefa com ID ${id}:`, error);
        throw error;
    }
}
