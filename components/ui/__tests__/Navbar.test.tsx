import React from "react";
import { render, screen } from "@testing-library/react";
import ROUTES from "@/lib/routes";
import { usePathname } from "next/navigation";
import Navbar from "../Navbar";

// Mock the next/navigation module
jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

// Mock the next/link component
jest.mock("next/link", () => {
  const MockLink = ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => <a href={href}>{children}</a>;
  MockLink.displayName = "MockLink";
  return MockLink;
});

describe("Navbar", () => {
  it("renders the navbar with correct title", () => {
    (usePathname as jest.Mock).mockReturnValue("/");
    render(<Navbar>Test Content</Navbar>);
    expect(screen.getByText("Task Manager")).toBeInTheDocument();
  });

  it("renders all routes", () => {
    (usePathname as jest.Mock).mockReturnValue("/");
    render(<Navbar>Test Content</Navbar>);
    ROUTES.forEach((route) => {
      expect(screen.getByText(route.title)).toBeInTheDocument();
    });
  });

  beforeEach(() => {
    (usePathname as jest.Mock).mockClear();
  });

  it("highlights the active route", () => {
    const activeRoute = ROUTES[1];
    console.log("Active route:", activeRoute);

    const mockedUsePathname = usePathname as jest.Mock;
    mockedUsePathname.mockReturnValue(activeRoute.path);

    console.log("Mocked pathname:", mockedUsePathname());

    render(<Navbar>Test Content</Navbar>);

    const activeLink = screen.getByText(activeRoute.title);
    console.log("Active link classes:", activeLink.className);

    const allLinks = screen.getAllByRole("link");
    console.log(
      "All link elements:",
      allLinks.map((link) => ({
        text: link.textContent,
        class: link.className,
      })),
    );

    expect(activeLink).toHaveClass("text-gray-300 font-bold underline");
  });

  it("does not highlight inactive routes", () => {
    const activeRoute = ROUTES[1];
    const inactiveRoute = ROUTES[0];
    (usePathname as jest.Mock).mockReturnValue(activeRoute.path);
    render(<Navbar>Test Content</Navbar>);

    const inactiveLink = screen.getByText(inactiveRoute.title);
    expect(inactiveLink).toHaveClass("text-white");
    expect(inactiveLink).not.toHaveClass("font-bold");
    expect(inactiveLink).not.toHaveClass("underline");
  });

  it("renders children content", () => {
    (usePathname as jest.Mock).mockReturnValue("/");
    render(<Navbar>Test Content</Navbar>);
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });
});
