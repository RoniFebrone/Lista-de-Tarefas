import axios from "axios";


// const API_URL = import.meta.env.VITE_APP_API_URL || "http://localhost:3000";
// const API_URL = "https://to-do-db-json.vercel.app";
const API_URL = "https://to-do-list-server-2a139e47cc48.herokuapp.com" // Deixar documentado: solução encontrada para colocar o json-server funcional nao so como localhost.

const axiosInstance = axios.create({
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

export async function getTask(id) {
    const { data } = await axiosInstance.get(`tasksBD/${id}`);

    return data;
}

export async function createTask(task) {
    const { data } = await axiosInstance.post("tasksBD", task);

    return data;
}


export async function updateTask(id, updatedTask) {
    try {
        const { data } = await axiosInstance.put(`tasksBD/${id}`, updatedTask);
        return data;
    } catch (error) {
        console.error(`Erro ao atualizar tarefa com ID ${id}:`, error);
        throw error; 
    }
}

export async function deleteTask(id) {
    try {
        await axiosInstance.delete(`tasksBD/${id}`);
        console.log(`Tarefa com ID ${id} excluída com sucesso.`);
        return { success: true, message: `Tarefa com ID ${id} excluída com sucesso.` };
    } catch (error) {
        console.error(`Erro ao excluir tarefa com ID ${id}.`, error);
        throw error; 
    }
}
