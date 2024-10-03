import { render, screen } from "@testing-library/react";
import PhotosPage from "../photos/page";
describe("PhotosPage Component", () => {
  beforeEach(() => {
    render(<PhotosPage />);
  });

  test("renders local image with correct src", () => {
    const localImage = screen.getByAltText("Pepe Clown");
    expect(localImage).toBeInTheDocument();
    expect(localImage).toHaveAttribute("src", "/pepeClown.jpg");
  });

  test("renders external image with correct src", () => {
    const externalImage = screen.getByAltText("External Pepe Coin");
    expect(externalImage).toBeInTheDocument();
    expect(externalImage).toHaveAttribute(
      "src",
      "https://www.cryptotimes.io/wp-content/uploads/2024/09/whale-transfer-Pepe-coin-860x484.png",
    );
  });

  test("checks if all images have src attributes", () => {
    const images = screen.getAllByRole("img");

    images.forEach((img) => {
      expect(img).toHaveAttribute("src");
    });
  });
});
