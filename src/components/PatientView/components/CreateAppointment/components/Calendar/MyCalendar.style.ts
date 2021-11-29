import styled from "styled-components";
import Calendar from "react-calendar";

const StyledCalendar = styled(Calendar)`
  width: 100%;
  max-width: 400px;
  border-radius: 12px;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 16px;

  & > div {
    padding: 0 24px;

    &:first-of-type {
      height: 88px;
      border-bottom: 1px solid #dce0ec;
      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        background: none;
        border: none;
      }

      .react-calendar__navigation__label,
      .react-calendar__navigation__arrow {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 17px;
      }

      .react-calendar__navigation__label {
        font-weight: 600;
      }

      .react-calendar__navigation__arrow {
        color: var(--color-secondary);
        cursor: pointer;

        &:hover {
          transition: 0.2s;
          color: var(--color-primary-dark);
        }
      }
    }

    &:last-of-type {
      padding-bottom: 32px;

      .react-calendar__month-view__weekdays__weekday {
        text-align: center;
        font-size: 13px;
        color: #a1abc9;
        line-height: 130%;
        border: none;
        text-transform: uppercase;

        abbr {
          text-decoration: none;
        }
      }

      .react-calendar__tile {
        width: 32px;
        height: 51px;
        text-align: center;
        vertical-align: middle;
        font-weight: 600;
        font-size: 17px;
        line-height: 24px;
        color: #202225;
        border: 1px solid transparent;
        border-radius: 12px;
        background: none;
        cursor: pointer;

        &:hover {
          border-color: var(--color-primary);
        }

        &.react-calendar__tile--now {
          color: var(--color-primary);
        }

        &.react-calendar__tile--active {
          color: white;
          background: var(--color-primary);
          border-color: var(--color-primary);
        }

        &.react-calendar__month-view__days__day--neighboringMonth {
          color: var(--color-secondary);
        }
      }
    }
  }
`;

export default StyledCalendar;
