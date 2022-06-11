INSERT INTO [dbo].[application] (
        [Description],
        [IdClient],
        [IdUser],
        [IdStatus],
        [IdStatusPayment],
        [Date]
    )
VALUES (
    @Description,
    @IdClient,
    @IdUser,
    @IdStatus,
    @IdStatusPayment,
    CURRENT_TIMESTAMP
)