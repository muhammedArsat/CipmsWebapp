

export class InternshipUtils{

    static formatDate(dateString: string) {
        try {

            const date = new Date(dateString)

            return date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: "short",
                day:'numeric'
            })
            
        } catch (err) {
            console.error("Date formatting error")
            return dateString
        }
    }
}