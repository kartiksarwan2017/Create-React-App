// Complete the HomePage Component and export it
import Form from "./Form";

let name = "YourName", email = "xyz@pqr.com";

function HomePage() {
  return (
    <div className="Homepage">
      {/* Create a h1 tag and render Form Component here */}
      <h1>HomePage</h1>
      <Form />
    </div>
  );
}

export {name, email};
export default HomePage;

