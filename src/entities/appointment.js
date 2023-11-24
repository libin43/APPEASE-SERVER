export default function appointmentEntity(
    userId,
    date,
    startTime,
    endTime,
) {
    return {
        getUserId: () => userId,
        getSlotDate: () => date,
        getSlotStartTime: () => startTime,
        getSlotEndTime: () => endTime,
    }
}