This is a Task Manager app made with Next.js, TypeScript,Tailwind CSS, Jest, shadcn/ui.

It uses localStorage to store tasks and their status.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Running jest test

You can run jest tests by running the following command:

```bash
npm run test
```

## Test List

### AddTask Component
- **Render Test**: Verifies that the input field and the "Add Task" button are rendered correctly.
- **Add Task Functionality**: Checks that the `onAddTask` function is called with the correct task title when the button is clicked.
- **Input Clearing**: Ensures that the input field is cleared after adding a task.

### TaskItem Component
- **Render Test**: Confirms that the task title and "Complete" button are displayed.
- **Toggle Task Functionality**: Validates that the `onToggleTask` function is called with the correct task ID when the "Complete" button is clicked.
- **Delete Task Functionality**: Checks that the `onDeleteTask` function is called with the correct task ID when the "Delete" button is clicked.

### TaskManager Component
- **Render Test**: Ensures the "Task Manager" title is displayed correctly.
- **Add Task Functionality**: Tests that a new task can be added, and it appears in the task list.
- **Delete Task Functionality**: Validates that a task can be deleted from the task list, and it is no longer displayed.
## PhotosPage Component
- **Render Test for Local Image**: Checks that the local image is rendered with the correct `src` attribute, confirming that the image loads properly.

- **Render Test for External Image**: Verifies that the external image is rendered with the correct `src` attribute, ensuring that the image is accessible.

- **Check All Images for `src` Attributes**: Confirms that all images have `src` attributes to ensure that no images are missing their source.

## TaskTablePage Component
- **Title Display Test**: Verifies that the title "Task Manager" is displayed correctly in the component.

- **Table Header Test**: Ensures that the table headers ("Task ID", "Title", "Completed") are rendered correctly.

- **LocalStorage Task Display Test**: Validates that tasks stored in localStorage are displayed correctly in the table when the component mounts.

- **No Tasks Available Test**: Confirms that the message "No tasks available" is displayed when localStorage is empty.

## TaskTablePage Responsiveness Tests
- **Medium Screen Text Display**: Checks that the text for medium screens appears correctly when the viewport width is set to a medium size (768px).

- **Small Screen Text Display**: Validates that the text for small screens appears correctly when the viewport width is set to a small size (400px).

- **Clear Tasks Button Display on Large Screens**: Confirms that the "Clear Tasks" button is visible on large screens (1024px), and ensures that clicking it updates the task display correctly.

## Navbar Component Tests

- **Render Test with Correct Title**: Verifies that the navbar is rendered with the correct "Task Manager" title.
- **All Routes Rendering**: Ensures that all routes defined in the ROUTES array are correctly rendered in the navbar.
- **Active Route Highlighting**: Checks that the active route is highlighted with the correct CSS classes ("text-gray-300 font-bold underline").
- **Inactive Routes Styling**: Validates that inactive routes have the correct styling (only "text-white" class, without "font-bold" or "underline").
- **Children Content Rendering**: Confirms that the Navbar component correctly renders its children content.
