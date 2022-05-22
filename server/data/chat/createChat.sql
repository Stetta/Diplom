INSERT INTO [dbo].[chat]
    (
        [Date],
        [IdStatus],
        [IdUser],
        [IdClient],
        [IdApplication],
        [Text],
        [Photo],
        [IdStatusPayment]
    )
VALUES (
    @Date,
    @IdStatus,
    @IdUser,
    @IdClient,
    @IdApplication,
    @Text,
    @Photo,
    @IdStatusPayment
)