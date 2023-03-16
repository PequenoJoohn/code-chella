import styled from "styled-components";

export const Container = styled.div`
  padding: 1.5rem 1.5rem 2rem 1.5rem;
  
  form {
    .separate {
      div {  
        margin: 0 auto 2rem auto;
      }
    }
  h3 {
    font-size: 2rem;
    color: #444444;
    text-align: center;
    padding: 2rem 0 3rem;
  }

  > div {
    font-size: 2rem;
    margin: 0 auto 2rem auto;

    label {
      width: 100%;
      padding-bottom: 0.5rem;
    }

    input {
      width: 100%;
      padding: 0.625rem;
    }

    select {
      width: 100%;
      padding: 0.625rem;
      border: none;
      color: black;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }

    span {
      display: inline-block;
      width: 100%;
      color: red;
      font-size: 1rem;
    }

  }
  button {
    max-width: 164px;
    margin: 0 auto;
  }
  }

  .ticket {
    font-size: 2rem;
    font-weight: 700;
    color: #444444;
    text-align: center;
    margin-bottom: 2rem;

    &-title {
      margin: 4rem auto 2rem auto;
    }

    &-print {
      margin: 0 auto;
      max-width: 312px;
      width: 100%;
      background: linear-gradient(0deg, rgba(250,207,157,1) 0%, rgba(251,240,221,1) 50%, rgba(200,222,239,1) 100%); 
      padding: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;

      &-header {
        width: 100%;
        display: flex;
        justify-content: space-between;

        > img {
          &:first-child {
            max-width: 117px;
          }

          &:last-child {
            width: 32px;
            height: 32px;
          }
        }
      }

      &-body {
        &-qrcode {
          margin: 2rem 0;
          width: 248px;
          height: 100%;

          > img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
      }
      &-name {
        font-weight: 700;
        font-size: 2rem;
        margin-bottom: 1rem;
        text-transform: capitalize;
      }

      &-type, &-ticket, &-birthday, &-locale{
        font-size: 1.25rem;
        font-weight: 500;
        margin-bottom: 1.5rem;
        text-transform: capitalize;
      }
    }
    }
  }

  @media screen and (min-width: 768px) {
    form {
      margin: 0 auto;
      max-width: 648px;

      input, select {
        max-width: 648px;
      }

      input[type="date"] {
        max-width: 453px;
      }

    }

    .ticket {
      &-title {
        max-width: 648px;
      }
      &-print {
        max-width: 648px;
        margin: 0 auto;

        &-qrcode {
        width: 480px;
        height: 100%;

        > img {
          height: 100%;
          width: 100%;
        }
      }
      }
    }
  }

  @media screen and (min-width: 1440px) {
    form {
        .separate {
          display: flex;
          justify-content: space-between;
          width: 100%;

          div {
            flex: 0 0 49%;
            input, select {
              margin-top: 0.5rem;
              height: 56px;
            }
          }
        }
      }

    .ticket {
      &-title {
        max-width: 792px;
      }
      &-print {
        max-width: 992px;
        width: 100%;
        &-body {
          align-items: center;
          justify-content: initial;
          display: flex;
          height: 222px;      
          width: 100%;
          margin-top: 2rem;
        }
      }
    }
    }
`;
