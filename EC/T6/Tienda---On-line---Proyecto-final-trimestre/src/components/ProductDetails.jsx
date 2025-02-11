import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function ProductDetails({
  obj: { id, image, title, description, price, category },
}) {
  return (
    <>
      <Card style={{ width: "40rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>Título: {title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Button variant="primary">Añadir al carrito</Button>
        </Card.Body>
      </Card>
    </>
  );
}
