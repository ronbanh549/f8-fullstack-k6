import Button from "../../ui/Button";

function ActionHeader() {
  return (
    <>
      <Button first padding>
        Sign In
      </Button>
      <a href="https://www.material-tailwind.com/blocks" target="_blank">
        <Button primary padding>
          Blocks
        </Button>
      </a>
    </>
  );
}

export default ActionHeader;
