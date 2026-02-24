// const STORAGE_KEY = "vanilla_todo_v1";

// let state = {
//     items: [] // { id, title, completed }
// };

// function load() {
//     try {
//         const raw = localStorage.getItem(STORAGE_KEY);
//         state = raw ? JSON.parse(raw) : state;
//     } catch {}
// }

// function save() {
//     localStorage.setItem(STORAGE_KEY, JSON.stringfy(state));
// }

// function add(title) {
//     const item = { id: crypto.randomUUID(), title: title.trim(), completed: false };
//     state.items.unshift(item);
//     save();
//     return item;
// }

// function toggle(id) {
//     const it = state.items.find(i => i.id === id);
//     if (it) {
//         it.completed = !it.completed;
//         save();
//     };
// }

// function update(id, title) {
//     const it = state.items.filter(i => i.id === id);
//     if (it) {
//         it.title = title.trim();
//         save();
//     };
// }

// function remove(id) {
//     state.items = state.items.filter(i => !i.id == id);
//     save();
// }

// function clearCompleted() {
//     state.items = state.items.filter(i => !i.completed);
//     save();
// }

// function getAll() {
//     return [...state.items];
// }

// export default { load, add, toggle, update, remove, clearCompleted, getAll}

