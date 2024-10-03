# Projekt Zaliczeniowy z programowania Frontend, Paweł Podgórski 13K2

## Instrukcja: Jak stworzyć projekt w Next.js oraz dodać komponent

### Krok 1: Tworzenie nowego projektu w Next.js

Aby stworzyć nowy projekt w Next.js, wykonaj następujące kroki:

1. Zainstaluj Node.js i npm (jeśli jeszcze tego nie zrobiłeś):
   - Pobierz i zainstaluj Node.js z oficjalnej strony Node.js.

2. Zainstaluj Next.js:
   W terminalu przejdź do katalogu, w którym chcesz utworzyć projekt, i uruchom polecenie:
   ```
   npx create-next-app@latest
   ```
   Zostaniesz poproszony o podanie nazwy projektu oraz kilku opcji konfiguracji. Po zakończeniu, nowy projekt zostanie utworzony.

3. Przejdź do katalogu projektu

4. Uruchom projekt w trybie deweloperskim:
   ```
   npm run dev
   ```

Projekt będzie dostępny pod adresem http://localhost:3000.

### Krok 2: Dodawanie nowego komponentu w Next.js

1. Utwórz folder dla komponentów:
   - W katalogu głównym projektu Next.js utwórz folder `components`, jeśli go jeszcze nie masz.

2. Utwórz plik dla nowego komponentu:
   - Na przykład, utwórz komponent o nazwie `AddTask.jsx`.

3. Dodaj kod komponentu do pliku `AddTask.jsx`:
   - Przykładowy komponent do dodawania zadania:

   ```jsx
   import { useState } from 'react';

   const AddTask = ({ onAddTask }) => {
     const [task, setTask] = useState('');

     const handleAddTask = () => {
       if (task.trim()) {
         onAddTask(task);
         setTask('');
       }
     };

     return (
       <div>
         <input
           type="text"
           placeholder="Enter a new task"
           value={task}
           onChange={(e) => setTask(e.target.value)}
         />
         <button onClick={handleAddTask}>Add Task</button>
       </div>
     );
   };

   export default AddTask;
   ```

4. Dodaj komponent do strony:
   - Otwórz stronę, na której chcesz użyć komponentu, np. `pages/index.js` i zaimportuj oraz użyj komponentu:

   ```jsx
   import AddTask from '@/components/AddTask';

   export default function Home() {
     const handleAddTask = (task) => {
       console.log('Task added:', task);
     };

     return (
       <div>
         <h1>Task Manager</h1>
         <AddTask onAddTask={handleAddTask} />
       </div>
     );
   }
   ```

## Instrukcja dodania testów do projektu Next.js

1. Zainstaluj niezbędne pakiety:
   ```
   npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event
   ```

2. Utwórz konfigurację dla Jest:
   W pliku `package.json` dodaj następującą sekcję:
   ```json
   "jest": {
     "testEnvironment": "jsdom",
     "setupFilesAfterEnv": ["<rootDir>/jest.setup.js"]
   }
   ```

3. Utwórz plik `jest.setup.js`:
   Dodaj nowy plik `jest.setup.js` w głównym katalogu projektu i skonfiguruj Testing Library:
   ```javascript
   import '@testing-library/jest-dom';
   ```

4. Tworzenie folderu testów:
   Utwórz folder `__tests__` w katalogu `components` lub w katalogu głównym projektu, aby przechowywać testy dla poszczególnych komponentów.

### Tworzenie testów dla komponentów

5. Dodanie prostego testu dla komponentu:
   Na przykład, aby przetestować komponent AddTask, używamy następującego kodu:

   ```jsx
   import { render, screen, fireEvent } from "@testing-library/react";
   import "@testing-library/jest-dom";
   import AddTask from "@/components/tasks/AddTask";

   describe("AddTask Component", () => {
     test("should render input and button", () => {
       render(<AddTask onAddTask={() => {}} />);

       expect(screen.getByPlaceholderText("Enter a new task")).toBeInTheDocument();
       expect(screen.getByText("Add Task")).toBeInTheDocument();
     });

     test("should call onAddTask when button is clicked", () => {
       const mockAddTask = jest.fn();
       render(<AddTask onAddTask={mockAddTask} />);

       const inputElement = screen.getByPlaceholderText("Enter a new task");
       const addButton = screen.getByText("Add Task");

       fireEvent.change(inputElement, { target: { value: "New Task" } });
       fireEvent.click(addButton);

       expect(mockAddTask).toHaveBeenCalledWith("New Task");
     });

     test("should clear input after adding task", () => {
       render(<AddTask onAddTask={() => {}} />);

       const inputElement = screen.getByPlaceholderText("Enter a new task");
       const addButton = screen.getByText("Add Task");

       fireEvent.change(inputElement, { target: { value: "Task to Clear" } });
       fireEvent.click(addButton);

       expect(inputElement).toHaveValue("");
     });
   });
   ```

Testowanie komponentu AddTask polega na weryfikacji jego funkcjonalności i interakcji użytkownika, aby upewnić się, że działa zgodnie z oczekiwaniami. Proces ten obejmuje kilka kroków, takich jak sprawdzenie, czy komponent renderuje poprawne elementy, czy reaguje na zmiany wprowadzone przez użytkownika, oraz czy wywołuje odpowiednie funkcje, kiedy użytkownik wykona pewne działania.

6. Aby włączyć testy wpisz w terminalu komendę:
   ```bash
   npm run test
   ```
### Kluczowe aspekty testowania komponentu AddTask:

1. **Sprawdzanie renderowania elementów**: Pierwszy test weryfikuje, czy komponent poprawnie renderuje input oraz przycisk "Add Task". To ważne, aby upewnić się, że komponent wyświetla wszystkie niezbędne elementy interfejsu użytkownika.

   Cel: Upewniamy się, że komponent wyświetla input z odpowiednim placeholderem oraz przycisk dodawania zadania.

2. **Testowanie interakcji użytkownika – dodawanie zadania**: Drugi test weryfikuje, czy po wpisaniu tekstu w pole input oraz kliknięciu przycisku, zostanie wywołana funkcja onAddTask z odpowiednim parametrem (czyli tekstem zadania).

   Cel: Upewniamy się, że po wprowadzeniu tekstu zadania i kliknięciu przycisku funkcja onAddTask zostaje wywołana z poprawnym parametrem (nazwą zadania). Ten test symuluje interakcję użytkownika i sprawdza, czy mechanizm dodawania zadania działa poprawnie.

3. **Czyszczenie pola input po dodaniu zadania**: Trzeci test sprawdza, czy po dodaniu zadania pole input zostaje wyczyszczone, co jest kluczowe dla dobrego UX, aby użytkownik mógł natychmiast wpisać nowe zadanie.

   Cel: Po dodaniu zadania input powinien zostać automatycznie wyczyszczony, co poprawia płynność wprowadzania kolejnych zadań.

### Podsumowanie

Aby dodać testy do projektu Next.js, wystarczy zainstalować odpowiednie pakiety, skonfigurować Jest, a następnie napisać testy dla komponentów używając @testing-library/react i @testing-library/jest-dom. W testach można sprawdzać, czy elementy są renderowane poprawnie oraz czy odpowiednie funkcje są wywoływane w reakcji na interakcje użytkownika.
