import { format, formatDistanceStrict  } from "date-fns";

export function formatDate(start) {
    return format(Date.parse(start), "dd MMMM yyyy, HH:mm")
}

export function formatDistance(start, end) {
    return formatDistanceStrict(Date.parse(start), Date.parse(end))
}