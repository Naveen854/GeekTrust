/**
 * Manages user-related operations
 */
export class UserManager {
    /**
     * Filters users based on search term
     * @param {User[]} users - Array of users to filter
     * @param {string} searchTerm - Term to filter by
     * @returns {User[]} Filtered users
     */
    static filterUsers(users, searchTerm) {
        const term = searchTerm.toLowerCase();
        return users.filter(user =>
            user.name.toLowerCase().includes(term) ||
            user.email.toLowerCase().includes(term) ||
            user.role.toLowerCase().includes(term)
        );
    }

    /**
     * Gets paginated users
     * @param {User[]} users - Array of users
     * @param {number} page - Current page
     * @param {number} rowsPerPage - Rows per page
     * @returns {User[]} Paginated users
     */
    static getPaginatedUsers(users, page, rowsPerPage) {
        const startIndex = (page - 1) * rowsPerPage;
        return users.slice(startIndex, startIndex + rowsPerPage);
    }
}