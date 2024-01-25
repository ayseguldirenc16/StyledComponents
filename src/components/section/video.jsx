import styled from "styled-components";

const StyledVideo = styled.video`
  width: 100%;
  height: auto;
  border-radius: 15px;
`;

const VideoCard = () => {
  return (
    <div>
      <StyledVideo controls>
        <source src="../../../public/images/video.mp4" muted  type="video/mp4" />
      </StyledVideo>
    </div>
  );
};

export default VideoCard;
