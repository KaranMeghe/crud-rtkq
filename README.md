<!-- @format -->

# 📦 Why Use RTK Query Instead of Thunks or useEffect?

You're absolutely right—**you _can_ fetch data using `useEffect` or Redux Thunks**.  
But **RTK Query (RTKQ)** is designed to solve many of the common problems that come up when managing server data in a frontend app.

---

## 🧩 The Traditional Approach: `useEffect` or Thunks

Using `useEffect` or Thunks, you'd usually:

- Manually fetch the data using `fetch` or `axios`.
- Handle loading, success, and error states in your slice/reducer.
- Store the fetched data in Redux state.
- Write logic for caching or re-fetching if needed.
- Write selectors to access that data in components.
- Handle optimistic updates, invalidation, pagination, etc.

👉 That’s **a lot of boilerplate** and repetitive code to maintain.

---

## 💡 What RTK Query Offers

RTK Query abstracts all of that and gives you a **built-in, declarative, and efficient** way to manage server data.

### ✅ Key Benefits of RTK Query

- 🔁 **Auto-fetching**: Automatically fetches data when the component mounts or when arguments change.
- 💾 **Caching**: Keeps a normalized cache of responses.
- 🔁 **Re-fetching**: Can auto-refetch on window focus or reconnect.
- 💬 **Built-in Hooks**: Auto-generated hooks like `useGetXQuery`, `useAddXMutation`, etc.
- 🔄 **Invalidation System**: Easily refetch data after mutations.
- ⚡ **Performance Optimized**: Reduces unnecessary renders and duplicate requests.
- 🛠️ **DevTools Support**: Debug API calls using Redux DevTools.
- 🧪 **Testing-Friendly**: Simplifies mocking and testing of async logic.

---

## 🔍 Real-World Comparison

### ❌ With Thunks (Manual Approach)

```tsx
useEffect(() => {
  dispatch(fetchUsers());
}, []);
```

Requires manual actions, reducers, and handling of loading/error states.

✅ With RTK Query
tsx
Copy
Edit
const { data, isLoading, error } = useGetUsersQuery();
No reducers, no thunks—just use the hook and you're done.

⚖️ When Should You Use RTK Query?
✅ Use RTK Query when:
You're building a frontend app that consumes APIs.

You want to reduce boilerplate and simplify API logic.

You need caching, automatic refetching, or pagination.

🚫 You might skip RTK Query if:
Your app doesn’t use much API data.

You need very custom API handling logic that doesn’t fit RTKQ’s model.

You’re already using another data-fetching library like React Query.

🧠 Bonus: Thunks vs RTK Query vs React Query
✅ When to Use Redux Thunks
Use thunks if:

You already use Redux for global/local state.

You want fine-grained control over the data flow.

You want centralized state (single source of truth).

You need to combine async data with other Redux logic.

✅ When to Use React Query
Use React Query if:

You only need to fetch & cache server-side data.

You want automatic caching, pagination, refetching.

You don’t want to manually write reducers/slices.

You want rapid development with fewer lines of code.
