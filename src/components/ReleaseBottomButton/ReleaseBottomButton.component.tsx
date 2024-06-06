import Button from '../Button/Button.component';

export default function ReleaseBottomButton({}): JSX.Element {
  return (
    <Button
      customStyles={{ width: '100%' }}
      type="primary"
      href="https://r2devops.io"
    >
      <span>Try it</span>
    </Button>
  );
}
